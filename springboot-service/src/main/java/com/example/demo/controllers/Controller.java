@RestController
public class DataController {

    @Autowired
    JdbcTemplate jdbc;

    @Autowired
    MongoTemplate mongoTemplate;

    @GetMapping("/mysql/join")
    public List<Map<String,Object>> mysqlJoin() {
        return jdbc.queryForList(
            "SELECT u.name,o.product,o.amount FROM users u JOIN orders o ON u.id=o.user_id"
        );
    }

    @GetMapping("/mongo/aggregation")
    public List<Document> mongoAgg() {
        Aggregation agg = Aggregation.newAggregation(
            lookup("orders","_id","user_id","orders"),
            project("name")
              .andExpression("sum(orders.amount)").as("total_spent")
        );
        return mongoTemplate.aggregate(agg,"users",Document.class).getMappedResults();
    }
}