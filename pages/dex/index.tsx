import type { NextPage } from 'next';
import Layout from '../../components/Layout';
import { useAccount } from 'wagmi';
import Actions from '../../components/Actions';
const Dex: NextPage = () => {

    const { isConnected } = useAccount();

    return (
        <Layout>
            
            {(!isConnected) &&
                <div className='my-28'>
                    <h1 className='text-2xl text-center'>Connect to start trading!</h1>
                </div>
            }
            {isConnected &&

                <Actions/>

                }
                
        </Layout>
    );
};

export default Dex;