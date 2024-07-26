import { createSignerFromKeypair, generateSigner, percentAmount } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  createV1,
  TokenStandard,
} from "@metaplex-foundation/mpl-token-metadata";

(async () => {
  const secretArray = [
    147, 90, 152, 75, 247, 156, 254, 134, 42, 238, 135, 45, 59, 44, 247, 50, 31,
    136, 38, 48, 87, 141, 225, 120, 82, 223, 123, 189, 206, 242, 54, 62, 204,
    132, 131, 23, 237, 11, 155, 138, 247, 3, 140, 117, 64, 125, 243, 34, 13, 67,
    147, 188, 84, 73, 24, 130, 57, 181, 199, 104, 120, 133, 253, 86,
  ];
  const umi = createUmi("https://api.devnet.solana.com");

  const secret = new Uint8Array(secretArray);
  const keypair = umi.eddsa.createKeypairFromSecretKey(secret);
  const signer = createSignerFromKeypair(umi, keypair)

  console.log(signer, signer.publicKey);

  const mint = generateSigner(umi);
  const sig = await createV1(umi, {
    mint,
    authority: umi.identity,
    name: "SLD",
    uri: "www.google.com",
    sellerFeeBasisPoints: percentAmount(3.5),
    tokenStandard: TokenStandard.FungibleAsset,
  }).sendAndConfirm(umi);
  console.log({sig});
})();
