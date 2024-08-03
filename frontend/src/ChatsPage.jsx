import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <>
            <div style={{ height: '100vh' }}>
                <PrettyChatWindow
                    projectId='64a21e64-c130-4fa3-80cc-115426fd64a4'
                    username={props.user.username}
                    secret={props.user.secret}
                    style={{ height: '100%' }}
                />
            </div>
        </>
    );
};
export default ChatsPage;