# Hospital Billing Analytics – Data Dictionary

## 1. Project Information

| Attribute | Description |
|---|---|
| Project | Hospital Billing Analytics |
| Source format | CSV |
| Total source records | 1,010 |
| Total source columns | 20 |
| Platform | Databricks |
| Architecture | Medallion Architecture |

## 2. Source Dataset Columns

The following descriptions are based on the source column names and their use in the project transformations.

| Column Name | Description |
|---|---|
| bill_id | Unique billing record identifier |
| visit_id | Hospital visit identifier |
| patient_id | Patient identifier |
| patient_gender | Patient gender category |
| patient_age | Patient age |
| visit_date | Date of hospital visit |
| visit_type | Type of hospital visit |
| department | Hospital department |
| doctor_name | Name of the treating doctor |
| service_category | Category of medical service |
| service_name | Name of medical service |
| hospital_branch | Hospital branch name |
| city | City where the branch is located |
| region | Geographical region |
| payer_type | Type of payment provider |
| quantity | Number of services or units billed |
| unit_price | Price per unit |
| total_amount | Total billing amount |
| insurance_amount | Amount covered by insurance |
| payment_status | Status of the payment |

## 3. Bronze Layer Columns

The Bronze table preserves the source columns and adds:

| Column | Description |
|---|---|
| source_file | Name of the source CSV file |
| loaded_at | Timestamp when the record was ingested |

Table: `bronze_hospital_billing`

## 4. Silver Layer Tables

| Table | Description |
|---|---|
| silver_billing_deduplicated | Records after duplicate bill IDs are removed |
| silver_billing_clean | Standardized valid billing records |
| silver_billing_rejected | Invalid records with rejection reasons |

Additional field in the rejected table:

| Column | Description |
|---|---|
| reject_reason | Explanation for record rejection |

## 5. Gold Layer Tables

| Table | Purpose |
|---|---|
| gold_monthly_revenue | Monthly revenue and visit analysis |
| gold_department_summary | Department-level billing performance |
| gold_branch_summary | Branch and regional performance |
| gold_payer_summary | Payer-wise revenue and pending payments |
| gold_data_quality | Data-quality metrics and reconciliation |

## 6. Dataset Processing Summary

| Metric | Count |
|---|---:|
| Bronze records | 1,010 |
| Deduplicated records | 990 |
| Duplicate records removed | 20 |
| Clean records | 968 |
| Rejected records | 22 |

Reconciliation:

1,010 = 990 + 20

990 = 968 + 22

**Reconciliation status: PASS**
