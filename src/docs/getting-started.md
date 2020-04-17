# Getting Started

Jade requires Node.js. [Install](https://nodejs.org/en/download/package-manager/#nvm) it first.

### Install Jade via NPM

```
npm install -g @etclabscore/jade-service-runner
```

### Run the server

```
jade-service-runner
```

```
info: Service Runner port starting on [object Object] {"service":"ServiceRunner","context":"startServiceRunner","path":"/"}
info: Service Runner started on [object Object] {"service":"ServiceRunner","context":"startServiceRunner","path":"/"}
```

### Install `core-geth` Service

Do this by creating a [JSON-RPC](json-rpc) request to the `installService` method

<iframe src="https://inspector.open-rpc.org/?url=http://localhost:8002&request[jsonrpc]=2.0&request[method]=installService&request[params][0]=core-geth&request[params][1]=1.11.2&request[id]=0" style="border: none; width: 100%; height: 350px;"/>

When the service is installed, the server will return `true`

```json
{
    "jsonrpc": "2.0",
    "result": true,
    "id": 0
}
```

<br />
<br />

### Run `core-geth` Service
Do this by creating a [JSON-RPC](json-rpc) request to the `startService` method

<iframe src="https://inspector.open-rpc.org/?url=http://localhost:8002&request[jsonrpc]=2.0&request[method]=startService&request[params][0]=core-geth&request[params][1]=1.11.2&request[params][2]=kotti&request[id]=0" style="border: none; width: 100%; height: 350px;"/>
<br />

Now the `core-geth` service is running at: `http://localhost:8002/core-geth/kotti/1.9.9`

Make a JSON-RPC request to `kotti` environment running within the `core-geth` service to get the networks `chainId`:

<iframe src="https://inspector.open-rpc.org/?url=http://localhost:8002/core-geth/kotti/1.11.2&request[jsonrpc]=2.0&request[method]=eth_chainId&request[id]=0" style="border: none; width: 100%; height: 350px;"/>

The result is `0x6` for kotti envorinment within the `core-geth` service:

```json
{
    "jsonrpc": "2.0",
    "result": "0x6",
    "id": 0
}
```
