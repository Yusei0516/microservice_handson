def lambda_handler(event, context):
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': 'Lambda 1からの応答:こんにちは!'
    }
