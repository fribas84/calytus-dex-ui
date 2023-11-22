import type { NextPage } from 'next';
const Dex: NextPage = () => {

    const { isConnected } = useAccount();

    return (
        <Layout>
            
            {(!isConnected) &&
                <div className='my-28'>
                    <h1 className='text-2xl text-center'>Connect to start building!</h1>
                </div>
            }
            {isConnected &&

                }
                <
        </Layout>
    );
};

export default Dex;