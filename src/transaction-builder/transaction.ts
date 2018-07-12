import { Output, ToBeOutput } from "../interfaces/crypto";
import { deepSortObject } from "../hasher/hash";



export class TransactionBuilder {

    private inputs: Output[];
    private outputs: ToBeOutput[];

    constructor() {
    }

    /**
     * Add the inputs and sort them by txid (privacy).
     * @param input input to use in the transaction.
     */
    addInput(input: Output) {
        this.inputs.push(input);
        this.inputs.sort(this.sortInputsByTxid);
    }
    private sortInputsByTxid (a: Output, b: Output) {
        if(a.txid > b.txid) {
            return 1
        } else if (b.txid  > a.txid ) {
            return -1
        }
        return 0;
    }

    /**
     * Add the 'to be outputs' and sort them by amount (privacy).
     * @param output output created by the transaction.
     */
    addOutput(output: ToBeOutput) {
        this.outputs.push(output);
        this.outputs.sort(this.sortOutputsByAmount);
    }
    private sortOutputsByAmount (a: ToBeOutput, b: ToBeOutput) {
        if(a.amount > b.amount) {
            return 1
        } else if (b.amount  > a.amount ) {
            return -1
        }
        return 0;
    }

    /**
     * Sign the transaction and return the signatures.
     */
    sign(): string[] {
        return [""];
    }

}