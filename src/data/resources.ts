export const RESOURCES = [
  {
    "id": "i-0a12f34b567cde123",
    "name": "ec2-api-server",
    "type": "EC2 Instance",
    "status": "running",
    "region": "us-east-1",
    "cpu": 67,
    "memory": 72,
    "account": "project-alpha",
    "tags": [
      "api",
      "critical"
    ],
    "createdAt": "2024-12-01T10:12:00Z"
  },
  {
    "id": "rds-db-user-002",
    "name": "rds-user-db",
    "type": "RDS Instance",
    "status": "overloaded",
    "region": "eu-west-1",
    "cpu": 92,
    "memory": 89,
    "account": "project-beta",
    "tags": [
      "rds",
      "production"
    ],
    "createdAt": "2025-01-05T08:40:00Z"
  },
  {
    "id": "alb-003",
    "name": "app-load-balancer",
    "type": "Application Load Balancer",
    "status": "running",
    "region": "us-west-2",
    "cpu": 35,
    "memory": 20,
    "account": "project-alpha",
    "tags": [
      "alb",
      "frontend"
    ],
    "createdAt": "2024-10-12T13:00:00Z"
  },
  {
    "id": "i-0d12a54c678cfa999",
    "name": "ec2-worker-node-01",
    "type": "EC2 Instance",
    "status": "stopped",
    "region": "ap-south-1",
    "cpu": 0,
    "memory": 0,
    "account": "project-gamma",
    "tags": [
      "batch",
      "compute"
    ],
    "createdAt": "2025-02-15T07:30:00Z"
  },
  {
    "id": "i-0f98e76b321cdfe89",
    "name": "ec2-monitoring-agent",
    "type": "EC2 Instance",
    "status": "running",
    "region": "us-east-2",
    "cpu": 22,
    "memory": 18,
    "account": "project-alpha",
    "tags": [
      "monitoring",
      "internal"
    ],
    "createdAt": "2025-03-01T14:22:00Z"
  },
  {
    "id": "rds-db-analytics-006",
    "name": "rds-analytics-db",
    "type": "RDS Instance",
    "status": "running",
    "region": "ap-south-1",
    "cpu": 59,
    "memory": 64,
    "account": "project-beta",
    "tags": [
      "analytics",
      "postgresql"
    ],
    "createdAt": "2025-03-12T05:15:00Z"
  },
  {
    "id": "cache-redis-007",
    "name": "elasticache-redis",
    "type": "ElastiCache",
    "status": "running",
    "region": "us-central-1",
    "cpu": 12,
    "memory": 45,
    "account": "project-gamma",
    "tags": [
      "redis",
      "session"
    ],
    "createdAt": "2025-02-20T11:00:00Z"
  }
]