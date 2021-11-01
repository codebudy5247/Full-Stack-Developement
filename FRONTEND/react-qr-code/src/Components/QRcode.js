import React from "react";
import QRCode from "react-qr-code";
const QRcode = () => {
  let URI = "https://orunpay-connect-app.herokuapp.com/accounts";
  return (
    <div>
      <QRCode value={URI} />
    </div>
  );
};

export default QRcode;
