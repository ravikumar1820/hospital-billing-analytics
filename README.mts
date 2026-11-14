# 🏥 Hospital Billing Analytics

### End-to-End Data Engineering Project Using Databricks

![Databricks](https://img.shields.io/badge/Platform-Databricks-red)
![Spark SQL](https://img.shields.io/badge/Language-Spark_SQL-orange)
![Architecture](https://img.shields.io/badge/Architecture-Medallion-blue)
![Status](https://img.shields.io/badge/Project-Completed-success)

---

## 📌 Project Overview

Hospital Billing Analytics is an end-to-end Data Engineering project developed using Databricks.

The project transforms raw hospital billing data into clean, validated, and business-ready datasets using Medallion Architecture.

The solution includes data ingestion, data cleaning, business transformations, data quality validation, and interactive dashboards.

## 🏗️ Project Architecture

![Medallion Architecture](architecture/medallion_architecture.png)

### Architecture Layers

**1. Bronze Layer – Raw Data Ingestion**
- Ingest raw hospital billing CSV data.
- Preserve original records.
- Capture source filename and ingestion timestamp.

Output: `bronze_hospital_billing`

**2. Silver Layer – Data Cleaning**
- Remove duplicate billing records.
- Standardize text values.
- Handle missing values.
- Separate invalid records with rejection reasons.

Output:
- `silver_billing_deduplicated`
- `silver_billing_clean`
- `silver_billing_rejected`

**3. Gold Layer – Business Analytics**

Create business-ready analytical tables:

- `gold_monthly_revenue`
- `gold_department_summary`
- `gold_branch_summary`
- `gold_payer_summary`
- `gold_data_quality`

## 🛠️ Technologies Used

- Databricks
- Apache Spark SQL
- Lakeflow Spark Declarative Pipelines
- Unity Catalog
- Databricks Volumes
- Databricks AI/BI Dashboards
- GitHub

## 📂 Dataset Information

- Dataset: Hospital Billing
- Format: CSV
- Total Records: 1,010
- Total Columns: 20

The project uses synthetic learning-project data.

## 🧹 Data Cleaning Rules

| Issue | Transformation |
|---|---|
| Duplicate bill IDs | ROW_NUMBER() |
| Extra spaces | TRIM() |
| Mixed capitalization | INITCAP() |
| Missing department | COALESCE() |
| Missing payer type | COALESCE() |
| Missing total amount | Quantity × Unit Price |
| Invalid quantity | Rejected |
| Negative unit price | Rejected |

## 📊 Data Processing Results

| Metric | Records |
|---|---:|
| Bronze Records | 1,010 |
| Deduplicated Records | 990 |
| Clean Records | 968 |
| Rejected Records | 22 |
| Duplicate Records Removed | 20 |

### Data Reconciliation

Bronze = Clean + Rejected + Duplicates

**1,010 = 968 + 22 + 20**

Reconciliation Status: PASS

## 📈 Dashboard & Business Insights

### Page 1 – Hospital Overview

![Hospital Overview](dashboard/page1_overview.png)

Includes:
- Total Revenue
- Total Visits
- Insurance Amount
- Monthly Revenue Trend
- Revenue Analysis

### Page 2 – Branch & Payer Analytics

![Branch and Payer Analytics](dashboard/page2_branch_payer.png)

Includes:
- Revenue by Department
- Revenue by Region
- Branch Performance
- Payer Analysis

### Page 3 – Data Quality

![Data Quality Dashboard](dashboard/page3_data_quality.png)

Includes:
- Bronze Records
- Clean Records
- Rejected Records
- Duplicate Records
- Reconciliation Status
- Data Validation Issues

## 🚀 Implementation Workflow

1. Create Unity Catalog catalog, schema and Volume.
2. Upload raw CSV data.
3. Build Bronze streaming table.
4. Clean and transform data in Silver.
5. Create Gold business summary tables.
6. Implement data quality and reconciliation.
7. Develop Databricks AI/BI dashboards.
8. Validate and document the project.

## 🎯 Key Learnings

- Implementing Medallion Architecture.
- Working with Spark SQL.
- Building Lakeflow pipelines.
- Data cleaning and transformation.
- Data quality and reconciliation.
- Developing business intelligence dashboards.

## 📁 Repository Structure

```text
hospital-billing-analytics/
│
├── README.md
├── architecture/
│   └── medallion_architecture.png
│
├── pipelines/
│   ├── 01_bronze.sql
│   ├── 02_silver.sql
│   ├── 03_gold.sql
│   └── 04_data_quality.sql
│
├── dashboard/
│   ├── page1_overview.png
│   ├── page2_branch_payer.png
│   └── page3_data_quality.png
│
├── docs/
│   ├── data_dictionary.md
│   └── cleaning_rules.md
│
└── data/
    └── README.md
```

## 👨‍💻 Project Author

Data Engineering Portfolio Project

**Technologies:** Databricks | Apache Spark SQL | Lakeflow | Unity Catalog | AI/BI Dashboards
