BEGIN
    DELETE FROM LoanReminders;

    FOR rec IN (
        SELECT l.LoanID, l.EndDate, c.Name
        FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        INSERT INTO LoanReminders (Message)
        VALUES (
            'Reminder: Loan ID ' || rec.LoanID ||
            ' for customer ' || rec.Name ||
            ' is due on ' || TO_CHAR(rec.EndDate, 'YYYY-MM-DD')
        );
    END LOOP;

    COMMIT;
END;
