localStorage 
> presistant storage
> we have to remove the data manully
> wrt to browser

localStorage.setItem('mycity','Delhi')
undefined
localStorage.getItem('mycity')
'Delhi'
localStorage.removeItem('mycity')
undefined
localStorage.getItem('mycity')
null
localStorage.setItem('mycity','Delhi')
undefined

sessionStorage
> temp storage
> save wrt to tab
> remove as soon as you close the tab

sessionStorage.setItem('token','89348437')
undefined
sessionStorage.getItem('token')
'89348437'
sessionStorage.removeItem('token')
undefined
sessionStorage.getItem('token')


cookies
> save wrt to websites
> expires in time

document.cookie
'_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.747318145.1670637899; _gat_gtag_UA_131256843_1=1'
document.cookie = "city=delhi; expires=Sun, 11 Dec 2022 13:00:00 UTC"
'city=delhi; expires=Sun, 11 Dec 2022 13:00:00 UTC'
document.cookie
'_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.747318145.1670637899; city=delhi'