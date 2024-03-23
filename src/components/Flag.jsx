import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";

const Flag = () => {
	const [value, setValue] = useState(-1);
	useEffect(() => {
		const encryptedValue = localStorage.getItem("count");
			const decrypted = encryptedValue
				? CryptoJS.AES.decrypt(encryptedValue, "byp4ss").toString(
						CryptoJS.enc.Utf8)
				: null;
		setValue(parseInt(decrypted));
	}, []);

	return value === 10 ? (
		<div className="text-black flex justify-center items-center p-4 rounded-lg mt-10 mx-64 bg-green-500">
			{"Here is your Reward : CTF{7ampering_l0c4l_d4t4_1s_4_cr1me}"}
		</div>
	) : (
		<div className="h-screen flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
			<div className="text-center">
				<p className="text-4xl font-bold mb-4">
					Oh you have not cracked the previous levels
				</p>
				<p className="text-2xl font-bold">
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-900 to-blue-500">
						Keep playing and try to crack the levels to unlock more fun!
					</span>
				</p>
			</div>
			<h1>{value}</h1>
		</div>
	);
};

export default Flag;
