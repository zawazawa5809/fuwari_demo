// Google認証を使わないように修正
const LoginButton = () => {
  // Firebase認証機能を無効化
  return (
    <button
      className="login-button disabled"
      disabled={true}
      title="現在ログイン機能は無効です"
    >
      ログイン機能は現在無効です
    </button>
  );
};

export default LoginButton;
