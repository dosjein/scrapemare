*ScrapeMare*

* Thanks
[julionc](https://gist.github.com/julionc/7476620)

**API Documentation**


**Request Scrape Work**
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

**Request Scrape Results**
----
  Reguest scrape Url.

* **URL**

  /api/v1/results

* **Method:**

  `GET`
  
*  **URL Params**

  none

* **Data Params**

  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"status":1 ,"vacant":{ req_id : 'html scraped'}}`
 
* **Error Response:**

  * **Code:** 200 <br />
    **Content:** `{"status":0 }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/api/v1/results",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```