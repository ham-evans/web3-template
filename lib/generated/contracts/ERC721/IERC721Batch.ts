/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IERC721BatchInterface extends utils.Interface {
  functions: {
    "isOwnerOf(address,uint256[])": FunctionFragment;
    "transferBatch(address,address,uint256[],bytes)": FunctionFragment;
    "walletOfOwner(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "isOwnerOf" | "transferBatch" | "walletOfOwner"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "isOwnerOf",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferBatch",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "walletOfOwner",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "isOwnerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "walletOfOwner",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IERC721Batch extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC721BatchInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    isOwnerOf(
      account: PromiseOrValue<string>,
      tokenIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferBatch(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenIds: PromiseOrValue<BigNumberish>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    walletOfOwner(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;
  };

  isOwnerOf(
    account: PromiseOrValue<string>,
    tokenIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferBatch(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenIds: PromiseOrValue<BigNumberish>[],
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  walletOfOwner(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  callStatic: {
    isOwnerOf(
      account: PromiseOrValue<string>,
      tokenIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferBatch(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenIds: PromiseOrValue<BigNumberish>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    walletOfOwner(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    isOwnerOf(
      account: PromiseOrValue<string>,
      tokenIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferBatch(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenIds: PromiseOrValue<BigNumberish>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    walletOfOwner(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isOwnerOf(
      account: PromiseOrValue<string>,
      tokenIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferBatch(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenIds: PromiseOrValue<BigNumberish>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    walletOfOwner(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}