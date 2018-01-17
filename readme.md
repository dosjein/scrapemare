*ScrapeMare*


**API Documentation**


**Get Barcode Info**
----
  Reguest scrape Url.

* **URL**

  /api/v1/demand_scrape

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `url=[string]`

   `web_hook_url=[string]`

* **Data Params**

	none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"status":1}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{"status":0}`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/api/v1/demand_scrape?url=http://ss.lv",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

* Thanks
[julionc](https://gist.github.com/julionc/7476620)