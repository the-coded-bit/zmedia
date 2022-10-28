import React from 'react'
import './components.css';

function Sidebar() {
    return (
        <aside className='sidebar-container'>
            <div className='logo-container'>
            <i class="ri-funds-fill"></i>
            <span>Finance</span>
            </div>
            <div className='menu'>
                <i class="ri-home-7-line"></i>
                <span>Dashboard</span>
                <i class="ri-arrow-down-s-line"></i>
            </div>
            <div className='menu'>
                <i class="ri-book-line"></i>
                <span>Pages</span>
                <i class="ri-arrow-down-s-line"></i>
            </div>
            <div className='menu'>
                <i class="ri-grid-line"></i>
                <span>Applications</span>
                <i class="ri-arrow-down-s-line"></i>
            </div>
            <div className='menu'>
                <i class="ri-markup-fill"></i>
                <span>UI Component</span>
                <i class="ri-arrow-down-s-line"></i>
            </div>
            <div className='menu'>
                <i class="ri-add-circle-line"></i>
                <span>Widgets</span>
                <i class="ri-arrow-down-s-line"></i>
            </div>
            <div className='menu'>
                <i class="ri-information-line"></i>
                <span>Forms</span>
                <i class="ri-arrow-down-s-line"></i>
            </div>
            <div className='menu'>
            <i class="ri-pie-chart-2-line"></i>
                <span>Charts</span>
                <i class="ri-arrow-down-s-line"></i>
            </div>
        </aside>
    )
}

export default Sidebar