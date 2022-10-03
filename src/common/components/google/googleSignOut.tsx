interface IGoogleSignOutParams {
  onSignOut: (param: {}) => void;
}
const GoogleSignOut = (props: IGoogleSignOutParams) => {
  const revokeGsi = () => {
    if (!window.google) return;
    window.google.accounts.id.revoke(
      "Pranshu.gupta@Bluestacks.com",
      (done: any) => {
        props.onSignOut(done);
      }
    );
  };
  return (
    <button className="g_id_signout" onClick={() => revokeGsi()}>
      SignOut
    </button>
  );
};

export default GoogleSignOut;
