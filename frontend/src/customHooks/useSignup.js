import { useState } from "react";
import toast from "react-hot-toast";


const useSignup = () => {
	const [loading, setLoading] = useState(false);


	const signup = async ({ fullname, username, password, confirmedPassword, gender }) => {
		const success = handleInputErrors({ fullname, username, password, confirmedPassword, gender });
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("/api/auth/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullname, username, password, confirmedPassword, gender }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
		
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};
export default useSignup;

function handleInputErrors({ fullname, username, password, confirmedPassword, gender }) {
	if (!fullname || !username || !password || !confirmedPassword || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmedPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}