## ERC-20 Payments
ERC-20 Payments is a utility script for ERC-20 token payments for merchants (e.g. aDAI, pBTC, DAI, etc). 
It is a non custodial solution which allows merchants to trigger their own purchase flow on ERC-20 token 
transfer confirmation to their address.

### Sample Flow
1) Merchant App prompts user to link their ETH address to the account.  
   Address verification is done using signed messages.
2) User selects a product on the Merchant App. The aDAI token is shown as a payment option. 
   When user clicks on the pay button, an order entry is created in the merchant database. 
   The entry includes product details, amount, expiry time, token address, user id and ETH address.
   Then the transaction confirmation popup is shown.
3) User confirms the transaction (aDAI is sent to the merchant address)
4) Merchant backend runs the ERC-20 payments script present in this repo. 
   The script listens to confirmed aDAI transfers to the merchant address. 
   In the callback, merchant backend can trigger their purchase flow (Based on aDAI amount and sender address)

### Why aDAI is the perfect token for payments?
The aDai is the perfect token for payments since it is an interest bearing token which is created whenever 
DAI stable coin is deposited to the Aave protocol. The aDAI token will always have the same value as 
a DAI token and it will increase in balance over the time.

### Getting Started
1) Install nodejs and npm

2) Clone repo

   ```
   git clone https://github.com/viraja1/erc_20_payments.git 
   ```
   
3) Change directory

   ```
   cd erc_20_payments 
   ``` 
   
4) Create .env file based on .env_sample

   ```
   cp .env_sample .env 
   ```
   
5) Update the following environment variables in .env

   ``` 
   TOKEN_CONTRACT_ADDRESS
   RECEIVER_ADDRESS
   NETWORK
   ```
   
   The supported NETWORK values are mainnet, kovan and ropsten

6) Update the purchase flow trigger logic in index.js 
   
7) Start the script
   
   ```
   npm start 
   ```