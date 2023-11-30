import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {


  return (

    <div >
      <Head>
        <title>baDEX</title>
        <meta
          content="a descentralized DEX project"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="container-fluid" >
        <div className='m-10 '>
          <div className="hero h" style={{ backgroundImage: 'url(/static/images/background.png)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome to baDEX!</h1>
                <p className="mb-5">a simple decentralized exchange powered by smart contracts.</p>
                <button className="btn btn-primary rounded-xl hover:scale12"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/dex'
                  }}>Get Started!</button>
              </div>
            </div>
          </div>
        </div>

        
      </main>


    </div>


  );
};

export default Home;
