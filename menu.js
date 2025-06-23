/* Menu general */
.main-header {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: relative;
    z-index: 100;
}

.main-header .content-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
}

.main-header img {
    height: 50px;
}

/* Iconos del menú */
#open-menu-button, #close-menu-button {
    font-size: 2rem;
    cursor: pointer;
    display: none;
}

/* Menú principal */
.main-menu {
    display: flex;
    gap: 2rem;
}

.main-menu ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    padding: 0;
    margin: 0;
}

.main-menu li a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
}

/* Responsive */
@media (max-width: 768px) {
    #open-menu-button {
        display: block;
    }

    .main-menu {
        position: fixed;
        top: 0;
        right: -100%;
        height: 100%;
        width: 70%;
        background-color: #fff;
        flex-direction: column;
        align-items: flex-start;
        padding: 2rem;
        transition: right 0.3s ease-in-out;
        box-shadow: -2px 0 5px rgba(0,0,0,0.2);
    }

    .main-menu.menu-visible {
        right: 0;
    }

    #close-menu-button {
        display: block;
        align-self: flex-end;
        margin-bottom: 1rem;
    }

    .main-menu ul {
        flex-direction: column;
        width: 100%;
    }

    .main-menu li a {
        display: block;
        padding: 1rem 0;
        width: 100%;
        border-bottom: 1px solid #ccc;
    }
}