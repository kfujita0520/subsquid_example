import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, ManyToOne as ManyToOne_, BigIntColumn as BigIntColumn_, BooleanColumn as BooleanColumn_} from "@subsquid/typeorm-store"
import {Collection} from "./collection.model"
import {Account} from "./account.model"

@Entity_()
export class NfToken {
    constructor(props?: Partial<NfToken>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: false})
    nativeId!: string

    @Index_()
    @StringColumn_({nullable: true})
    name!: string | undefined | null

    @Index_()
    @StringColumn_({nullable: true})
    symbol!: string | undefined | null

    @Index_()
    @ManyToOne_(() => Collection, {nullable: true})
    collection!: Collection

    @StringColumn_({nullable: true})
    uri!: string | undefined | null

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    currentOwner!: Account

    @Index_()
    @BigIntColumn_({nullable: false})
    amount!: bigint

    @Index_()
    @BooleanColumn_({nullable: false})
    isBurned!: boolean
}
