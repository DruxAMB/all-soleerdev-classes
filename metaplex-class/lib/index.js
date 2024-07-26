"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var umi_1 = require("@metaplex-foundation/umi");
var umi_bundle_defaults_1 = require("@metaplex-foundation/umi-bundle-defaults");
var mpl_token_metadata_1 = require("@metaplex-foundation/mpl-token-metadata");
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var secretArray, umi, secret, keypair, signer, mint, sig;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                secretArray = [
                    147, 90, 152, 75, 247, 156, 254, 134, 42, 238, 135, 45, 59, 44, 247, 50, 31,
                    136, 38, 48, 87, 141, 225, 120, 82, 223, 123, 189, 206, 242, 54, 62, 204,
                    132, 131, 23, 237, 11, 155, 138, 247, 3, 140, 117, 64, 125, 243, 34, 13, 67,
                    147, 188, 84, 73, 24, 130, 57, 181, 199, 104, 120, 133, 253, 86,
                ];
                umi = (0, umi_bundle_defaults_1.createUmi)("https://api.devnet.solana.com");
                secret = new Uint8Array(secretArray);
                keypair = umi.eddsa.createKeypairFromSecretKey(secret);
                signer = (0, umi_1.createSignerFromKeypair)(umi, keypair);
                console.log(signer, signer.publicKey);
                mint = (0, umi_1.generateSigner)(umi);
                return [4 /*yield*/, (0, mpl_token_metadata_1.createV1)(umi, {
                        mint: mint,
                        authority: umi.identity,
                        name: "SLD",
                        uri: "www.google.com",
                        sellerFeeBasisPoints: (0, umi_1.percentAmount)(3.5),
                        tokenStandard: mpl_token_metadata_1.TokenStandard.FungibleAsset,
                    }).sendAndConfirm(umi)];
            case 1:
                sig = _a.sent();
                console.log({ sig: sig });
                return [2 /*return*/];
        }
    });
}); })();
