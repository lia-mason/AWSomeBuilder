# AWSomeBuilder

## Overview

The CloudFormation templates in this project create the infrastructure required to host a single page serverless web application for the Springfield Car Share Initiative. The project also contains a placeholder React web application.

## Architecture

<img width="900" alt="arch" src="https://user-images.githubusercontent.com/57345244/130268637-db2b5064-7650-41d9-ba6e-4774d6c8db0b.png">

## Prerequisites

- AWS credentials with permission to deploy CloudFormation templates
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) and [cfn-cli](https://github.com/Kotaimen/awscfncli) installed
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
