import ReturnWagmi from "@hooks/mounted";

export const Hero = () => {
  const { address, isConnected, openConnectModal } = ReturnWagmi();
  return (
    <div className="m-auto">
      {openConnectModal && (
        <button onClick={openConnectModal} type="button">
          Open Connect Modal
        </button>
      )}
      {isConnected && <div>Address: {address}</div>}
    </div>
  );
};
