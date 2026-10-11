# Logican Execution Order

1. FROM (identify tables to take data)
2. ON apply join
3. JOIN (combining matching rows)
4. WHERE (Filter Individual before grouping)
5. group by (Group rows with same value)
6. Having (Filter groups after aggregation)
7. SELECT - choose columns, calculate expressions.
8. DISTINCT - Remove duplicates
9. ORDER BY - sort final result
10. LIMIT/TOP - restrict return rows.