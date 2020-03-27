#!/bin/sh

echo "Deploy Infrastructure Templates"
stack_name=$(aws ssm get-parameter --name CODE_CHALLENGE_PARENT_STACK_NAME --query Parameter.Value | tr -d '"')

if [[ -z "$stack_name" ]]; then
      echo "$stack_name does not exists in cloudfromation"
else
    s3_bucket=$(aws ssm get-parameter --name S3_ARTIFACT_BUCKET --query Parameter.Value | tr -d '"')

    aws cloudformation deploy \
        --template-file parent-template.yaml \
        --stack-name ${stack_name} \
        --capabilities CAPABILITY_NAMED_IAM \
        --parameter-overrides S3TemplatePath=${s3_bucket}.s3.amazonaws.com
fi