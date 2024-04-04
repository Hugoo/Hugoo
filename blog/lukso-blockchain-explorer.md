---
authors: hugo
tags: [lukso]
date: 2024-04-04
description: Why LUKSO needs a different explorer approach?
image: /img/articles/up-send-tx.png
---

# Why LUKSO needs a different explorer approach?

The LUKSO blockchain is different than other EVM chains (the chains running the [Ethereum Virtual Machine](https://ethereum.org/en/developers/docs/evm/) such as Ethereum, Polygon, Optimism...). Its value doesn't lie in the protocol, but in the standardised contracts that run on it.

The main difference: everything is built around a standardised smart account, which we call [Universal Profile](https://universalprofile.cloud)[^LSP0].

Long story short, this allows users to do cool stuff but it also has an impact on how we can track transactions on blockchain explorers.

<!--truncate-->

## EOA vs Smart contracts

On EVM chains, addresses can be either[^1]:

1. an Externally Owned Account (OEA)
2. or a smart contract

EOA are cheap, "dumb", easy and we are used to it. If you use MetaMask, Rainbow, Rabby, ... -> you are using an EOA.

On the other hand, accounts based on smart contracts are... smart (wow no way?) and powerful but a bit complex to set up. However, when a user joins the LUKSO ecosystem, this user is highly encouraged to use a smart contract account - we call them: [Universal Profiles](https://universalprofile.cloud) - and doing so is also quite easy because the [LUKSO Universal Profile Browser Extension](https://chromewebstore.google.com/detail/universal-profiles/abpickdkkbnbcoepogfhkhennhfhehfn) takes care of everything for you.

:::tip Key takeaways

At this stage, simply remember:

- on LUKSO, most users use a smart contract account (Universal Profiles).
- on other chains, most users use an EOA.

:::

### Cool features of smart accounts

There are a lot of cool features around smart accounts, but for the scope of this article, let's focus on "gasless" / "relayed" transactions.

Now that you have a smart account, you can ask someone else to send a transaction "in your name". Here is an example:

1. you write a postcard for your Mom and sign it with your name
2. you give the postcard to your friend Bob who will pay for the stamp and post it for you
3. your Mom receives a postcard from you, paid by Bob.

With standard EOA, you can't do this. If you write the letter (_read transaction_), no one else besides you (_your EOA_) can send and pay for that letter.

:::tip Key takeaways

Universal Profiles allow you to ask someone else to pay for your transaction while preserving your identity[^notonly].

:::

## Blockchain explorers in a non "EOA first" era

In a full EOA world, things are quite easy. No one can "send letters for you". The sender of the transaction IS the "person" who is sending the transaction.

Here is an example: Tx [`0x8e97...2177`](https://etherscan.io/tx/0x8e97d49acbe399b6c7d32b8612c9836ad71b4c2c71874ab1b6d46ef2d0dd2177) on Ethereum.

<div style={{textAlign: 'center'}}>

![A tx between 2 EOAs on etherscan](/img/articles/tx-etherscan.png)

_Etherscan shows the right information_

</div>

- `0x9522b6c62CAd5b8b8776aE6b95C09c1397fc7fBE` (EOA) sends 0.008886624445326524 ETH to `0xb68fBCAE1CfEb1b7c3bD78caA8E15dAcaFCbF88c` (EOA)

Easy 👌

---

Now, on a blockchain where most users use smart contract accounts (for instance, Universal Profiles), the person (or the company) who pays and sends the transaction _might not be_ the real person (step 2 above: "Bob pays and sends the postcard for you").

Here is an example: Tx [`0x44a1...b917`](https://explorer.execution.mainnet.lukso.network/tx/0x44a1b14dc0c3baca32e24161dbd783acab1e8e189040cd0399eeea30cb3cb917) on LUKSO.

<div style={{textAlign: 'center'}}>

![Sending 0.01 LYX from Hugo to Jean](/img/articles/up-send-tx.png)

_Sending 0.01 LYX between two Universal Profiles._

</div>

1. [Hugo](https://wallet.universalprofile.cloud/0x638AcE60D8636650279A82FF6D76AEae2b0b56e6?network=mainnet) signs a transaction (writes the postcard) and gives it to the sender.
2. The sender, let's call him John[^2], will buy the stamp and post the postcard on behalf of Hugo (read: pays transaction fees and sends the transaction).
3. [Jean](https://wallet.universalprofile.cloud/0x927aAD446E3bF6eeB776387B3d7A89D8016fA54d?network=mainnet) "receives" the postcard.

If the blockchain explorer is not "smart enough" to understand what is going on, it will simply show the information as "John has sent a transaction related to Hugo" (even the value is wrong).

<div style={{textAlign: 'center'}}>

![The tx as seen on EOA first explorer](/img/articles/blockscout-txs.png)

_How we see the transaction on an "EOA" first explorer. Spoiler alert: it is irrelevant._

</div>

On smart blockchain explorers which can decode these transactions properly, such as [Txs.app](https://txs.app), you can see the real activity:

<div style={{textAlign: 'center'}}>

![The tx as seen on Txs.app](/img/articles/txs-app-decode.png)

_The tx has seen on [Txs.app](https://txs.app/tx/0x44a1b14dc0c3baca32e24161dbd783acab1e8e189040cd0399eeea30cb3cb917)._

</div>

## Conclusion

When everyone starts using standardised[^3] blockchain accounts, it unlocks a lot of potential. However, to unlock this massive value, existing tools will need to evolve and very likely, new tools will need to be built. This is only the beginning 🚀

## Resources

- [LUKSO Technical Docs](https://docs.lukso.tech)
- [ERC725X](https://docs.lukso.tech/standards/lsp-background/erc725/#erc725x)

[^LSP0]: Based on [LSP0](https://docs.lukso.tech/standards/universal-profile/lsp0-erc725account/)
[^1]: https://ethereum.org/en/developers/docs/accounts/#key-differences
[^notonly]: This is only one feature enabled by this, there are many more
[^2]: The technical name is "Transaction Relay System"
[^3]: https://docs.lukso.tech/standards/universal-profile/introduction
