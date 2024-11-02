<template>
  <div class="card">
    <h5 class="card-header">
      Advanced Search
    </h5>
    <!-- Search Form -->
    <div class="card-body">
      <form
        class="dt_adv_search"
        method="GET"
      >
        <div class="row">
          <div class="col-12">
            <div class="row g-3">
              <div class="col-12 col-sm-6 col-lg-4">
                <div class="form-floating form-floating-outline">
                  <input
                    type="text"
                    class="form-control dt-input dt-full-name"
                    data-column="1"
                    placeholder="Enter full name"
                    data-column-index="0"
                  >
                  <label>Name</label>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-4">
                <div class="form-floating form-floating-outline">
                  <input
                    type="text"
                    class="form-control dt-input"
                    data-column="2"
                    placeholder="Enter email"
                    data-column-index="1"
                  >
                  <label>Email</label>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-4">
                <div class="form-floating form-floating-outline">
                  <input
                    type="text"
                    class="form-control dt-input"
                    data-column="3"
                    placeholder="Enter job title"
                    data-column-index="2"
                  >
                  <label>Post</label>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-4">
                <div class="form-floating form-floating-outline">
                  <input
                    type="text"
                    class="form-control dt-input"
                    data-column="4"
                    placeholder="Enter city"
                    data-column-index="3"
                  >
                  <label>City</label>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-4">
                <div class="form-floating form-floating-outline">
                  <input
                    id="dt_date"
                    type="text"
                    class="form-control dt-date flatpickr-range dt-input flatpickr-input"
                    data-column="5"
                    placeholder="Start Date to End Date"
                    data-column-index="4"
                    name="dt_date"
                  >
                  <label for="dt_date">Date</label>
                </div>
                <input
                  type="hidden"
                  class="form-control dt-date start_date dt-input"
                  data-column="5"
                  data-column-index="4"
                  name="value_from_start_date"
                >
                <input
                  type="hidden"
                  class="form-control dt-date end_date dt-input"
                  name="value_from_end_date"
                  data-column="5"
                  data-column-index="4"
                >
              </div>
              <div class="col-12 col-sm-6 col-lg-4">
                <div class="form-floating form-floating-outline">
                  <input
                    type="text"
                    class="form-control dt-input"
                    data-column="6"
                    placeholder="Enter salary"
                    data-column-index="5"
                  >
                  <label>Salary</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Submit and Clear Buttons -->
        <div class="row mt-3">
          <div class="col-12 d-flex justify-content-end">
            <button
              type="reset"
              class="btn btn-secondary me-2"
            >
              Clear
            </button>
            <button
              type="submit"
              class="btn btn-primary"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
    <hr class="mt-0">
    <div class="card-datatable table-responsive">
      <table
        id="DataTables_Table_2"
        class="dt-advanced-search table table-bordered dataTable dtr-column collapsed"
        aria-describedby="DataTables_Table_2_info"
      >
        <thead>
          <tr>
            <th
              class="control sorting_disabled"
              style="width: 0px;"
            />
            <th>Name</th>
            <th>Email</th>
            <th
              class="dtr-hidden"
              style="display: none;"
            >
              Post
            </th>
            <th
              class="dtr-hidden"
              style="display: none;"
            >
              City
            </th>
            <th
              class="dtr-hidden"
              style="display: none;"
            >
              Date
            </th>
            <th
              class="dtr-hidden"
              style="display: none;"
            >
              Salary
            </th>
          </tr>
        </thead>
        <tbody>
        <!-- Table rows go here -->
        </tbody>
        <tfoot>
          <tr>
            <th />
            <th>Name</th>
            <th>Email</th>
            <th
              class="dtr-hidden"
              style="display: none;"
            >
              Post
            </th>
            <th
              class="dtr-hidden"
              style="display: none;"
            >
              City
            </th>
            <th
              class="dtr-hidden"
              style="display: none;"
            >
              Date
            </th>
            <th
              class="dtr-hidden"
              style="display: none;"
            >
              Salary
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
