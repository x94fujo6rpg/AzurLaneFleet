const url_shortener = async (original_url = "", token = false) => {
	let success = false;
	if (token) {
		let result = await post_url(token, original_url);
		if (result) {
			success = true;
			return {
				url: `https://x94fujo6rpg.github.io/su/${result.num}`,
				token: token,
			};
		}
	}

	if (!success || !token) {
		let data = await get_token_via_firebase();
		if (!data.token) {
			console.log("unable to get github token", data);
			return false;
		} else {
			let result = await post_url(data.token, original_url);
			if (result) {
				return {
					url: `https://x94fujo6rpg.github.io/su/${result.num}`,
					token: data.token,
				};
			} else {
				return false;
			}
		}
	}

	async function get_token_via_firebase() {
		const providerGithub = new firebase.auth.GithubAuthProvider();
		try {
			let result = await firebase.auth().signInWithPopup(providerGithub),
				credential = result.credential,
				token = credential.accessToken,
				user = result.user;
			console.log({
				credential,
				token,
				user,
			});
			return {
				credential,
				token,
				user,
			};
		} catch (error) {
			let {
				code,
				message,
				email,
				credential
			} = error;
			return {
				code,
				message,
				email,
				credential
			};
		}
	}

	async function post_url(token, url) {
		const target_repo_name = "su-db",
			api_url = `https://api.github.com/repos/${user_name}/${target_repo_name}/issues`;
		let headers = new Headers({
			"Accept": "application/vnd.github.v3+json",
			"Authorization": `Bearer ${token}`,
			"Content-Type": "application/json",
		}),
			issue = {
				title: url, // issue title
				body: "this is create by app",
				assignees: [],
				labels: [],
				milestone: null,
			},
			config = {
				method: "POST",
				headers: headers,
				body: JSON.stringify(issue),
				redirect: "follow",
			};
		try {
			let result = await fetch(api_url, config);
			result = await result.json();
			return {
				num: result.number,
				user: result.user.login,
			};
		} catch (error) {
			console.log('error', error);
			return false;
		}
	}
};