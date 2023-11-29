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
                <div className='container mx-auto'>'
                    <div className="flex flex-col w-full lg:flex-row">
                        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><div className="stats bg-primary text-primary-content">

                            <div className="stat">
                                <div className="stat-title">Account balance</div>
                                <div className="stat-value">$89,400</div>
                                <div className="stat-actions">
                                    <button className="btn btn-sm btn-success">Add funds</button>
                                </div>
                            </div>

                            <div className="stat">
                                <div className="stat-title">Current balance</div>
                                <div className="stat-value">$89,400</div>
                                <div className="stat-actions">
                                    <button className="btn btn-sm">Withdrawal</button>
                                    <button className="btn btn-sm">deposit</button>
                                </div>
                            </div>

                        </div></div>
                        <div className="divider lg:divider-horizontal" />
                        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"></div>
                    </div>
                </div>
            }

        </Layout>
    );
};

export default Dex; 