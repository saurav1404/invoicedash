'use client';

import { useEffect, useState } from 'react';
import { Card, Metric, Text, Title, DonutChart, Select, SelectItem, BarList, Flex, Grid } from '@tremor/react';
import { Invoice } from './types';
import Search from './search';
import InvoicesTable from './table';
import invoiceData from "../assets/invoice_details_2.json";
import productData from "../assets/invoice_details_1.json";
import { DonutData, LineItems, Summary, TagLineItems } from './types';

const valueFormatter = (number: number) => { return (!number || number === 0) ? `$ 0` : `$ ${Intl.NumberFormat("us").format(number).toString()}`};

export const dynamic = 'force-dynamic';

export default function IndexPage() {

  const invoices = invoiceData.data as Invoice[];
  const [summary, setSummary] = useState({} as Summary);
  const [lineItems, setLineItems] = useState([] as LineItems[]);
  const [tagLineItems, setTagLineItems] = useState([] as TagLineItems[]);
  const [lineItemDonut, setLineItemDonut] = useState([] as DonutData[]);
  const [tagLineItemDonut, setTagLineItemDonut] = useState([] as DonutData[]);

  useEffect(()=> {
    const summary = productData.summary as Summary;
    const lineItems = productData.lineItems as LineItems[];
    const tagLineItems = productData.tagLineItems as TagLineItems[];
    setSummary(summary);
    setLineItems(lineItems);
    setTagLineItems(tagLineItems);
  }, [])

  const changeMeterId = (value:string) => {
    let lineitemData = lineItems.find((lineItem) => {return lineItem.productId === value});
    let lineItemDonutData = lineitemData?.subscriptionLineItems.map((subscriptionLineItem) => {
      return {
        name: subscriptionLineItem.subscriptionName,
        sales: subscriptionLineItem.amount,
      }
    }) as DonutData[]
    setLineItemDonut(lineItemDonutData);
  }

  const changeTagId = (value:string) => {
    let tagLineitemData = tagLineItems.find((tagLineItem) => {return tagLineItem.tagId === +value});
    let tagLineItemDonutData = tagLineitemData?.detailTagLineItems ? tagLineitemData?.detailTagLineItems.map((detailTagLineItem) => {
      return {
        name: detailTagLineItem.subscriptionName,
        sales: detailTagLineItem.amount,
      }
    }) as DonutData[] : [] as DonutData[];
    setTagLineItemDonut(tagLineItemDonutData);
  }


  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        <Card key={'summary'}>
          <Title>{'Summary'}</Title>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="space-x-2"
          >
            <Metric>{valueFormatter(summary.amount)}</Metric>
            <Text>Total Amount</Text>
          </Flex>
          <Flex className="mt-6">
            <Text>Tenant Id</Text>
            <Text className="text-right">Year-Month</Text>
          </Flex>
          <Flex className="mt-6">
            <Text>{summary.tenantId}</Text>
            <Text className="text-right">{summary.yearMonth}</Text>
          </Flex>
        </Card>
        <Card key={'Line Items'}>
          <Title>{'Line Items'}</Title>
          <div className="max-w-sm mx-auto space-y-6">
            <Select onValueChange={changeMeterId}>
              {lineItems.map((lineItem, key) => {
                return (
                  <SelectItem key = {key} value={lineItem.productId}>
                    Meter Id: {lineItem.meterId}
                  </SelectItem>
                )
              })}
            </Select>
          </div>
          <DonutChart
            className="mt-6"
            data={lineItemDonut}
            category="sales"
            index="name"
            valueFormatter={valueFormatter}
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber", "fuchsia", "gray", "lime"]}
          />
        </Card>
        <Card key={'Tag Line Items'}>
          <Title>{'Tag Line Items'}</Title>
          <div className="max-w-sm mx-auto space-y-6">
            <Select onValueChange={changeTagId}>
              {tagLineItems.map((tagLineItem, key) => {
                return (
                  <SelectItem key = {key} value={tagLineItem.tagId.toString()}>
                    Tag: {tagLineItem.tagName}
                  </SelectItem>
                )
              })}
            </Select>
          </div>
          <DonutChart
            className="mt-6"
            data={tagLineItemDonut}
            category="sales"
            index="name"
            valueFormatter={valueFormatter}
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber", "fuchsia", "gray", "lime"]}
          />
        </Card>
      </Grid>
      <div className="py-4">
        <Title>Invoices</Title>
        <Text>
          A list of invoices.
        </Text>
        {/* <Search /> */}
        <Card className="mt-6">
          <InvoicesTable invoices={invoices} />
        </Card>
      </div>
    </main>
  );
}
