import {Link, NavLink} from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

function Header() {

    const {cart} = useCart();
    return (
        <>
                <header className="site-header">
                    <div className="site-header__inner">
                        <Link to="/" className="brand">
                            <span className="brand__mark" aria-hidden="true">F</span>
                            <span>FakeStore</span>
                        </Link>


                        <Link
                            to="/Cart"
                            className="relative inline-flex min-h-[42px] items-center rounded-xl border border-[var(--color-line)] bg-[rgba(255,255,255,0.06)] px-[18px] text-[13px] font-bold transition-[border-color,background-color,transform] duration-[180ms] hover:-translate-y-0.5 hover:border-[rgba(212,255,84,0.5)] hover:bg-[rgba(212,255,84,0.1)] max-[380px]:min-h-[39px] max-[380px]:px-3"
                        >
                            <span>Cart</span>
                            {cart.length > 0 ? (
                                <span className="absolute -right-2 -top-2 grid size-[22px] place-items-center rounded-full border-2 border-[var(--color-ink)] bg-[var(--color-lime)] text-[11px] text-[var(--color-ink)]">
                                {cart.length}
                            </span>
                            ) : (
                                <span>
                                
                            </span>
                            )}

                        </Link>
                    </div>
                </header>
        </>
    )
}

export default Header