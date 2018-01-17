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
 
   `scrape_url=[string]`

   `wait_element=[string]`

   `wait_time=[integer]`

* **Data Params**

	none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"status":1}`
 
* **Error Response:**

  * **Code:** 200 <br />
    **Content:** `{"status":0 , 'error': 'NightMare bussy'}`

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