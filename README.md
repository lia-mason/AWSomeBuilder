# AWSomeBuilder

## Overview

The CloudFormation templates in this project create the infrastructure required to host a single page serverless web application for the Springfield Car Share Initiative. The project also contains a placeholder React web application.

Infrastructure Components:

- [Amazon Route 53](https://aws.amazon.com/route53/): To register our domain name
- [Amazon S3](https://aws.amazon.com/s3/): Our website is hosted using an S3 bucket.
- [Amazon CloudFront](https://aws.amazon.com/cloudfront): Used to make our website accessible to the public. A fast content delivery network with low latency and high availability.
- [AWS Web Application Firewall](https://aws.amazon.com/waf/): To control the traffic that reaches our website using security rules. The following rules have been configured: AWSManagedRulesCommonRuleSet, AWSManagedRulesAmazonIpReputationList, AWSManagedRulesBotControlRuleSet
- [Amazon Cognito](https://aws.amazon.com/cognito/): To provide user sign-up and sign-in.
- [Amazon API Gateway](https://aws.amazon.com/apigateway)/: 
- [AWS Lambda](https://aws.amazon.com/lambda/):
- [Amazon DynamoDB](https://aws.amazon.com/dynamodb/):

## Architecture

<img width="900" alt="arch" src="https://user-images.githubusercontent.com/57345244/130268637-db2b5064-7650-41d9-ba6e-4774d6c8db0b.png">

## Prerequisites

- AWS credentials with permission to deploy CloudFormation templates
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) and [AWS CloudFormation CLI](https://github.com/Kotaimen/awscfncli) installed
- React single page application
- Valid domain name and TLS certificate. Replace domain name parameter and TLS certificate parameter with custom values.

## Deployment using CloudFormation Command Line Interface

Run this command from the root folder of this project.

`cfn-cli stack deploy`

## Using Cognito and API Gateway in your React app

The output of the CloudFormation stacks contains a Cognito User Pools ID, Web Client ID, and API endpoint.
Replace the API endpoint in your React app with the corresponding output.

## Contact

For any questions, feel free to contact me at awslia@amazon.com
