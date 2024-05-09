import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, IntColumn as IntColumn_, StringColumn as StringColumn_, ManyToOne as ManyToOne_, BooleanColumn as BooleanColumn_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {TransferType} from "./_transferType"
import {NfToken} from "./nfToken.model"

@Entity_()
export class NftTransfer {
    constructor(props?: Partial<NftTransfer>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @BigIntColumn_({nullable: false})
    blockNumber!: bigint

    @DateTimeColumn_({nullable: false})
    timestamp!: Date

    @IntColumn_({nullable: false})
    eventIndex!: number

    @StringColumn_({nullable: false})
    txnHash!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    from!: Account

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    to!: Account

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    operator!: Account | undefined | null

    @Index_()
    @BigIntColumn_({nullable: false})
    amount!: bigint

    @Index_()
    @Column_("varchar", {length: 8, nullable: true})
    transferType!: TransferType | undefined | null

    @Index_()
    @ManyToOne_(() => NfToken, {nullable: true})
    token!: NfToken

    @BooleanColumn_({nullable: false})
    isBatch!: boolean
}
