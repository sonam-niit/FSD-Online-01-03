# HOC

![HOC Flow](../images/hoc.png)


## practice Task

- Create HOC that protects a page based on whether the user is autheticated.
- you need 3 pages
  1. Dashboard: should be accessible only for logged in users
  2. Profile: should be accessible only to logged in users
  3. Login: Should always accessible

- create Reusable HOC: withAuth

- create AuthContext / simple auth State using localStorage
- isAuthenticated: boolean
- create withAuth HOC
- is user is Autheticated: Dashboard -> WithAuth -> Show Dashboard
- if user not autheticated: Dashboard -> withAUth -> Please Login

- Login Page -> add Login button which change isAUtheticated property from false to true.
- also add logout button to change isAuthenticated from true to false.