import axios from 'axios'

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios.post(
            'http://localhost:3001/authenticate',
            { username: value })
            .then(r => props.onAuth({ ...r.data, secret: value }))
            .catch(e => console.log("Error: ", e))
        props.onAuth({ username: value, secret: value });
    };

    return (
        <>
            <div className="min-h-screen w-full bg-zinc-800 text-white font-Raleway flex justify-center md:p-10 items-center">
                <div className="w-3/4 md:w-1/3">
                    <form onSubmit={onSubmit} className="form-card text-center">
                        <p className=" text-3xl">Hey... <span className=" text-cyan-400">Anju </span>😃</p>
                        <p className="form-title text-3xl">Welcome 👋</p>

                        <div className="text-2xl py-2">Write Your Name & Get Started...</div>

                        <div className="auth space-y-3 flex flex-col justify-center items-center py-3">
                            <input required className="py-2 border border-white outline-none rounded-xl bg-transparent text-white px-3 w-full placeholder-cyan-400" placeholder="Your Name" name="username" />
                            <button className="py-2 px-9 bg-cyan-400 text-black rounded-lg font-Poppins  mx-3 w-full" type="submit">
                                Start Chat
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
};

export default AuthPage;