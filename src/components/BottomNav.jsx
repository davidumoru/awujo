import React from 'react';
import homeIcon from '../images/user.png';
import gameIcon from '../images/games.png';
import rankingIcon from '../images/ranking.png';
import walletIcon from '../images/wallet.png';
import accountIcon from '../images/user.png';

const BottomNav = () => {
  return (
    <>
    	<div className="w-full bottom-nav">
			<div className="flex justify-between">
				<a
					href="#"
					className="w-full focus:text-teal-500 hover:text-teal-500 flex flex-col items-center justify-center pt-2 pb-1"
				>
					<img src={homeIcon} alt="home icon" className="w-10 h-auto nav-icon" />
					<span className="tab block text-xs text-white">Home</span>
				</a>

				<a
					href="#"
					className="w-full focus:text-teal-500 hover:text-teal-500 flex flex-col items-center justify-center pt-2 pb-1"
				>
					<img src={gameIcon} alt="games icon" className="w-10 h-auto nav-icon" />
					<span className="tab block text-xs text-white">Games</span>
				</a>

				<a
					href="#"
					className="w-full focus:text-teal-500 hover:text-teal-500 flex flex-col items-center justify-center pt-2 pb-1"
				>
					<img src={rankingIcon} alt="ranking icon" className="w-10 h-auto nav-icon" />
					<span className="tab block text-xs text-white">Leaderboard</span>
				</a>

				<a
					href="#"
					className="w-full focus:text-teal-500 hover:text-teal-500 flex flex-col items-center justify-center pt-2 pb-1"
				>
					<img src={walletIcon} alt="wallet icon" className="w-10 h-auto nav-icon" />
					<span className="tab block text-xs text-white">Wallet</span>
				</a>

				<a
					href="#"
					className="w-full focus:text-teal-500 hover:text-teal-500 flex flex-col items-center justify-center pt-2 pb-1"
				>
					<img src={accountIcon} alt="account icon" className="w-10 h-auto nav-icon" />
					<span className="tab block text-xs text-white">Account</span>
				</a>
			</div>
    	</div>
    </>
  );
};

export default BottomNav;
