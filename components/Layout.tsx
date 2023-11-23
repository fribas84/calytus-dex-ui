
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Head from 'next/head';
import Navbar from './Navbar';
import { Hidratation } from './Hidratation';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>baDEX</title>
                <meta
                    content="a descentralized DEX project"
                    name="description"
                />
                <link href="/favicon.ico" rel="icon" />
            </Head>
            <main>
                <Hidratation>
                <div className='m-10'>
                
                <Navbar />
                <div className='my-5'>
                    {children}
                </div>


                </div>
                </Hidratation>
            </main >
        </>
    );
}