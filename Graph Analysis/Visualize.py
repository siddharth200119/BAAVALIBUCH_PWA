import matplotlib.pyplot as plt
import networkx as nx
import graphAnalysis

Graph = graphAnalysis.Graph

nx.draw_networkx(Graph, with_labels = True, node_size = 2000)
plt.savefig("graph.png")
