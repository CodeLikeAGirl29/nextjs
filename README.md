<h1>
    Welcome to my Portfolio
</h1>

> Note: This is a portfolio template, feel free to use it. And star it if you liked :P

![demo](https://res.cloudinary.com/codelikeagirl29/image/upload/v1680622204/projects/Lindsey-Frontend-Developer_ou7dnd.png)

✨ [Live Demo](https://lindseys-nextjs.vercel.app)

## API Reference

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `SPOTIFY_CLIENT_ID` | `string` | **Required**. Your API key |
| `SPOTIFY_CLIENT_SECRET` | `string` | **Required**. Your API secret key |
| `SPOTIFY_REFRESH_TOKEN` | `string` | **Required**. Your Refresh Token |

#### Get your Spotify key

1. Go to [Spotify Developers](https://developer.spotify.com/documentation/web-api)
2. Create an app. Once you have created your app, you will have access to the app credentials. These will be required for API authorization to obtain an access token.
3. Go into settings for your created app and find the client id and secret token. be sure to enter the callback url - such as using vercel to deploy
4. For the refresh token, you can use `npm`
```
npm install --global spotify-rtoken-cli
```
5. Enter the client-id and client-secret. for the code from the redirect url - you only have to enter the 'code' part from the URL that opens in the browser. and it'll generate a refresh token for you.


### Author

😊 Lindsey K - refactored

- [Portfolio](https://lindseyk.dev)
- [Github](https://github.com/codelikeagirl29)
- [Twitter](https://twitter.com/dev_lindseyk)

Give a star ⭐ to show your support :P

