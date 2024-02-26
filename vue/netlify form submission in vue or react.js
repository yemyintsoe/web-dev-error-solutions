# Netlify Form Submission in Vue or Other Client Side Apps

# You may have some difficulties for form submission in csr apps
# This is the solution

Step 1
Add html form with required inputs in index.html and the form must be hidden
// index.html
<form name="contact-form" netlify>
  // some inputs
</form>

// Other.vue
<form method="POST">
    // <input type="hidden" name="form-name" value="the-name-of-the-html-form" />
  <input type="hidden" name="form-name" value="contact-form" />
  // some inputs the same as index.html form
</form>
Ref:
https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
