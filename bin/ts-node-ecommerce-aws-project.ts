import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ProductsAppStack } from '../lib/productsApp-stack';
import { ECommerceApiStack } from '../lib/ecommerceApi-stack';

const app = new cdk.App();

const env: cdk.Environment = {
  account: "470654920551",
  region: "us-east-1" 
}

const tags = {
  cost: 'ECommerce',
  team: 'Lucas Alves'
}

const productsAppStack = new ProductsAppStack(app, 'ProductsApp', {
  tags,
  env
})

const eCommerceApiStack = new ECommerceApiStack(app, 'ECommerceApi', {
  tags,
  env,
  productsFetchFunction: productsAppStack.productsFetchHandler
})

eCommerceApiStack.addDependency(productsAppStack)