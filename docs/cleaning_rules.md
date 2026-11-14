# Hospital Billing Analytics – Data Cleaning Rules

## 1. Overview

The Silver layer performs data cleaning and validation on raw hospital billing records ingested into the Bronze layer.

The objective is to produce reliable records for business analytics while keeping invalid records separately for investigation.

## 2. Duplicate Removal

**Source:** `bronze_hospital_billing`

**Output:** `silver_billing_deduplicated`

Rule:
- Identify duplicate records using `bill_id`.
- Use the ROW_NUMBER() window function.
- Retain the record with row number 1.

Expected results:

| Metric | Records |
|---|---:|
| Bronze records | 1,010 |
| Deduplicated records | 990 |
| Duplicates removed | 20 |

## 3. Text Standardization

Functions used:

- TRIM(): Removes leading and trailing spaces.
- INITCAP(): Standardizes text capitalization.
- NULLIF(): Converts empty strings into NULL.
- COALESCE(): Replaces NULL values with fallback values.

Standardized fields include:

- patient_gender
- visit_type
- department
- doctor_name
- service_category
- service_name
- city
- region
- payer_type
- payment_status

## 4. Missing Value Handling

| Column | Transformation |
|---|---|
| department | Replace missing or empty values with Unknown |
| payer_type | Replace missing or empty values with Unknown |
| total_amount | Calculate quantity × unit_price when missing |

## 5. Invalid Record Identification

Records are rejected when:

| Condition | Rejection Reason |
|---|---|
| quantity IS NULL | Quantity is zero or negative |
| quantity <= 0 | Quantity is zero or negative |
| unit_price IS NULL | Unit price is negative |
| unit_price < 0 | Unit price is negative |

Rejected records are stored in:

`silver_billing_rejected`

The `reject_reason` column records the identified issue.

## 6. Clean Records

Records satisfying the validation rules are stored in:

`silver_billing_clean`

Expected processing results:

| Metric | Records |
|---|---:|
| Deduplicated records | 990 |
| Clean records | 968 |
| Rejected records | 22 |

## 7. Data Quality Reconciliation

The project verifies that source records are accounted for.

Formula:

Bronze Records = Clean Records + Rejected Records + Duplicate Records Removed

1,010 = 968 + 22 + 20

**Expected reconciliation result: PASS**

## 8. Quality Monitoring

The Gold data-quality table tracks:

- Total source records
- Duplicate records
- Deduplicated records
- Clean records
- Rejected records
- Invalid quantity records
- Invalid price records
- Missing department records
- Missing payer records
- Missing total amount records
- Reconciliation status

Output table:

`gold_data_quality`
