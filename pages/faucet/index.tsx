import type { NextPage } from 'next';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { useAccount } from 'wagmi';
import Actions from '../../components/Actions';
const Faucet: NextPage = () => {

    const { isConnected } = useAccount();

    return (
        <Layout>

            {(!isConnected) &&
                <div className='my-28'>
                    <h1 className='text-2xl text-center'>Connect to Request Tokens!</h1>
                </div>
            }
            {isConnected &&
                <div className='container mx-auto w-3/4'>
                    <div className="hero p-10 bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            
                            <Image src="/static/images/faucet.png" width={500}
                                height={500} 
                                alt="Faucet"/>
                            <div>
                                <h1 className="text-5xl font-bold">Test Token Faucet!</h1>
                                <p className="py-6">Request tradable tokens to play around with the platform.</p>
                                <button className="btn btn-primary">Request tkn1</button>
                                <button className="btn btn-secondary mx-5">Request tkn2</button>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </Layout>
    );
};

export default Faucet; 