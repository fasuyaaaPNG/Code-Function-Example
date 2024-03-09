useEffect(() => {
        const usernameAkun = document.querySelector(".usernameAkun");
        const bioAkun = document.querySelector(".bioAkun")
        if (usernameAkun !== null && usernameAkun.innerHTML.trim() === "") {
            usernameAkun.remove();
        };
        if (bioAkun !== null && bioAkun.innerHTML.trim() === "") {
            bioAkun.remove();
        };
    }, []);
