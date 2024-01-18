import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TsNodeEcommerceAwsProjectStack } from '../lib/ts-node-ecommerce-aws-project-stack';

const app = new cdk.App();
new TsNodeEcommerceAwsProjectStack(app, 'TsNodeEcommerceAwsProjectStack', {});