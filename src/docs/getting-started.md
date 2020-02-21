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

### Install Multi-Geth Service

Do this by creating a [JSON-RPC](json-rpc) request to the `installService` method

<iframe src="https://inspector.open-rpc.org/?url=http://localhost:8002&request[jsonrpc]=2.0&request[method]=installService&request[params][0]=multi-geth&request[params][1]=1.9.9" style="border: none; width: 100%; height: 300px;"/>

<br />
<br />

### Run Multi-Geth Service
Do this by creating a [JSON-RPC](json-rpc) request to the `startService` method

<iframe src="https://inspector.open-rpc.org/?url=http://localhost:8002&request[jsonrpc]=2.0&request[method]=startService&request[params][0]=multi-geth&request[params][1]=1.9.9&request[params][2]=kotti" style="border: none; width: 100%; height: 300px;"/>
<br />

Now the `multi-geth` service is running at: `http://localhost:8002/multi-geth/kotti/1.9.9`

Make a JSON-RPC request to `multi-geth` running via the service runner to get the networks `chainId`:

<iframe src="https://inspector.open-rpc.org/?url=http://localhost:8002/multi-geth/kotti/1.9.9&request[jsonrpc]=2.0&request[method]=eth_chainId" style="border: none; width: 100%; height: 300px;"/>
